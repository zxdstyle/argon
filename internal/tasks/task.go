package tasks

import (
	"context"
	"fmt"
	"github.com/zxdstyle/argon/internal/tasks/loader"
	"github.com/zxdstyle/argon/internal/tasks/util"
	"runtime"
	"time"
)

type (
	Task struct {
		opt Option
	}

	Option struct {
		goroutines int
	}
)

func New(opt Option) *Task {
	return &Task{
		opt: opt,
	}
}

func (t *Task) Do(ctx context.Context) {
	runtime.GOMAXPROCS(runtime.NumCPU() + t.opt.goroutines)

	loadGen := loader.NewLoadCfg(duration, goroutines, testUrl, reqBody, method, host, header, statsAggregator, timeoutms, allowRedirectsFlag, disableCompression, disableKeepAlive, skipVerify, clientCert, clientKey, caCert, http2)

	for i := 0; i < t.opt.goroutines; i++ {
		go loadGen.RunSingleLoadSession()
	}

	responders := 0
	aggStats := loader.RequesterStats{MinRequestTime: time.Minute}

	for responders < goroutines {
		select {
		case <-sigChan:
			loadGen.Stop()
			fmt.Printf("stopping...\n")
		case stats := <-statsAggregator:
			aggStats.NumErrs += stats.NumErrs
			aggStats.NumRequests += stats.NumRequests
			aggStats.TotRespSize += stats.TotRespSize
			aggStats.TotDuration += stats.TotDuration
			aggStats.MaxRequestTime = util.MaxDuration(aggStats.MaxRequestTime, stats.MaxRequestTime)
			aggStats.MinRequestTime = util.MinDuration(aggStats.MinRequestTime, stats.MinRequestTime)
			responders++
		}
	}

	if aggStats.NumRequests == 0 {
		fmt.Println("Error: No statistics collected / no requests found\n")
		return
	}

	avgThreadDur := aggStats.TotDuration / time.Duration(responders) //need to average the aggregated duration

	reqRate := float64(aggStats.NumRequests) / avgThreadDur.Seconds()
	avgReqTime := aggStats.TotDuration / time.Duration(aggStats.NumRequests)
	bytesRate := float64(aggStats.TotRespSize) / avgThreadDur.Seconds()
	fmt.Printf("%v requests in %v, %v read\n", aggStats.NumRequests, avgThreadDur, util.ByteSize{float64(aggStats.TotRespSize)})
	fmt.Printf("Requests/sec:\t\t%.2f\nTransfer/sec:\t\t%v\nAvg Req Time:\t\t%v\n", reqRate, util.ByteSize{bytesRate}, avgReqTime)
	fmt.Printf("Fastest Request:\t%v\n", aggStats.MinRequestTime)
	fmt.Printf("Slowest Request:\t%v\n", aggStats.MaxRequestTime)
	fmt.Printf("Number of Errors:\t%v\n", aggStats.NumErrs)
}

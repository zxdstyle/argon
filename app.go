package main

import (
	"context"
	"fmt"
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx

	runtime.EventsOn(a.ctx, "chat", func(optionalData ...interface{}) {
		fmt.Println(optionalData)
	})
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	runtime.MessageDialog(a.ctx, runtime.MessageDialogOptions{
		Type:    runtime.ErrorDialog,
		Message: "error",
	})
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

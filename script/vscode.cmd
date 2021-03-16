@echo off
set command=%1

IF %command% == "open" ( 
    echo "open"
) ELSE echo "not open"
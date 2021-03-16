text="{\"containerName\":\"/${1}\"}"
container_hex=$(printf $1 | od -A n -t x1 | tr -d '[\n\t ]')
folderuri=vscode-remote://dev-container+$container_hex/root/workspace
code --folder-uri=$folderuri
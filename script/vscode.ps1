$container_name = $args[0]
$containerinfo = "{`"containerName`":`"${container_name}`"}"
$container_hex = ""
foreach ($i in $containerinfo.toCharArray()) {
    $hex = "{0:x1}" -f [Int][Char]$i
    $container_hex += $hex.ToString()
}
$folderuri="vscode-remote://attached-container+${container_hex}/root/workspace"
code --folder-uri=$folderuri
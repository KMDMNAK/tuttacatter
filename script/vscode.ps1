$container_name = $args[0]
$text = "{`"containerName`":`"${container_name}`"}"
Write-Output $text
$container_hex = ""
foreach ($i in $text.toCharArray()) {
    $hex = "{0:x1}" -f [Int][Char]$i
    $container_hex += $hex.ToString()
}
$folderuri="vscode-remote://attached-container+${container_hex}/root/workspace"
code --folder-uri=$folderuri
# ----------------------------------------------
# Module 4 Travlr: Start MongoDB + Node.js + Populate Trips
# ----------------------------------------------

# Path to MongoDB binaries (update if different)
$mongoBin = "C:\Program Files\MongoDB\Server\8.2\bin\mongod.exe"
$dbPath = "C:\data\db"

# Path to Node.js project
$projectPath = "C:\Users\chapm\Documents\travlr"

# Function: Start MongoDB manually
Write-Host "Starting MongoDB..."
Start-Process -NoNewWindow -FilePath $mongoBin -ArgumentList "--dbpath $dbPath"
Start-Sleep -Seconds 5  # Give MongoDB a few seconds to start

# Function: Start Node.js server
Write-Host "Starting Node.js server..."
Start-Process -NoNewWindow -WorkingDirectory $projectPath -FilePath "node" -ArgumentList "app.js"
Start-Sleep -Seconds 5  # Give server a few seconds to start

# Function: Populate trips
Write-Host "Populating trips..."
Invoke-WebRequest -Uri "http://localhost:3000/api/populate" -UseBasicParsing | Out-Null

Write-Host "Travlr is ready! Visit http://localhost:3000/api/trips to view trips."

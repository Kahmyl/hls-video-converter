# hls-video-converter
An application that converts an mp4 video file to hls(.ts) video format

## Install ffmpeg on your device

## For Windows

1. Go to  [https://phoenixnap.com/kb/ffmpeg-windows] and click Windows builds from gyan.dev link
2. Select ffmpeg-git-full-7z to download full build
3. Go to your downloads and extract the downloaded files
4. Rename the exxtracted files to ffmpeg and move it to your C drive folder
5. Add the path of the ffmpeg folder to your path variable

## For Linux
 
```bash 

# run update on all packages
$ sudo apt update && sudo apt upgrade 

# install ffmpeg
$ sudo apt install ffmpeg

# verify installation
$ffmpeg -version

```

## For macOS

1. Download the FFmpeg package from the official website.
2.Choose the Static builds for macOS 64-bit. This will redirect you to the evermeet.cx site.
3. Select the ffmpeg-5.0.1 version.
4. Open the downloaded file. This will extract it using the Archive Utility and create an executable FFMpeg file.
5. Launch the Home folder by opening Finder and using the keyboard shortcut CMD + Shift + H, or clicking the Go button on the menu bar and clicking Home.
6. Go to File and click the New folder. Rename it to audio-orchestrator-ffmpeg and press Return to confirm the change.
7. Open the newly added folder and create a new folder labeled bin.
8. Move the FFmpeg file from Downloads to the newly created bin folder.
9. Double-click to open the FFmpeg file. When the “ffmpeg” can’t be opened because it is from an unidentified developer.” message appears, press OK.
10. Go to System Preferences and select Security and Privacy.
11. Choose the General tab.
12. A new error message appears, click Open Anyway.
13. Another pop-up will appear stating that “macOS cannot verify the developer of “ffmpeg”. Are you sure you want to open it?”. Click Open.
14. Double click the FFmpeg file, and a new Terminal window will open. Close it only when the process is complete.
15. Congratulations, you have successfully installed FFmpeg.

## Clone the repository
```bash 
git clone https://github.com/Kahmyl/hls-video-converter.git
```

## For the backend with laravel
```bash
cd converter 
```

## Install Dependencies
```bash 
composer install 
```

## Set ffmpeg paths
Go to config/laravel-ffmpeg.php and set the the ffmpeg and ffprobe binaries to your system ffmpeg path if it laravel-ffmpeg doesn't find path automatically


![Like so](https://github.com/Kahmyl/hls-video-converter/blob/main/path.png)

## Set your database config in .env
- If it doesnt exist create one and copy the .env-example file
- Set your database configs
- Make sure QUEUE_CONNECTION=database

## Migrate the schemas

```bash
php artisan migrate  
```

## Generate Key

```bash 
php artisan key:generate 
```

## Start the Server
```bash 
php artisan serve
```

## For the frontend
```bash 
cd converter_frontend
```

## Install Dependencies
```bash
# using npm
$ npm install

# using yarn
$ yarn
```

## Start the server
```bash
$ yarn serve

#or

$npm run serve
```



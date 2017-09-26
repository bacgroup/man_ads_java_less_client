var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: 'packages/man_ovd_client-win32-ia32',
    outputDirectory: 'packages/man_ovd_client-win32-ia32_installer',
    authors: 'MAN Consulting',
    //exe: 'man_ovd_client.exe',
    setupIcon: "icon.ico",
    setupExe: 'Install.exe'
  });

resultPromise.then(() => console.log("Win32 Installer!"), (e) => console.log(`No dice: ${e.message}`));
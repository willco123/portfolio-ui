import * as fs from "fs";
import path from "path";

const appDirectory = path.join(process.cwd(), "src/app/");

export function getRouteIds() {
  const targetDir = fs.readdirSync(appDirectory);
  const folderNames = targetDir.filter((item) => {
    const itemPath = path.join(appDirectory, item);
    return fs.statSync(itemPath).isDirectory();
  });

  return folderNames
    .filter((folderName) => folderName !== "blog")
    .map((folderName) => ({
      id: folderName,
    }));
}

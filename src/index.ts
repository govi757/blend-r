#!/usr/bin/env node
import { Command } from 'commander';
import path from 'path';
import { FileHelper } from './helper/fileHelper';
import BasicHelper from './helper/BasicHelper';
import FrontEndHelper from './helper/FrontEndHelper';
import DataHelper from './helper/DataHelper';
import ApiHelper from './helper/ApiHelper';



const program = new Command();

program
  .name('blend-r')
  .description('CLI for creating and editing files')
  .version('1.0.0');

// Command 1: blend-init
program.command('init')
  .description('Initialize the folder with a .basic file, spec folder, .basicConfig, and data files')
  .action(() => {
     const folderPath = path.join(process.cwd());
    const folderName = path.basename(folderPath);
    // Create .basic file
    const basicFilePath = path.join(folderPath, `${folderName}.rbasic`);
    const basicFileContent = ``;
    FileHelper.writeFile(basicFilePath, basicFileContent);

    // Create spec folder
    const specFolderPath = path.join(folderPath, 'spec');
    FileHelper.ensureDir(specFolderPath);

    // Create .basicConfig folder inside the main folder
    const basicConfigFolderPath = path.join(folderPath, '.basicConfig');
    FileHelper.ensureDir(basicConfigFolderPath);
    console.log(`Initialized ${folderName} with .rbasic file, spec folder..Happy Coding.......`);
  });

// Command 2: blend-prepare (set up and validate environment)
program.command('prepare')
  .description('Prepare the environment (e.g., validating setup, etc.)')
  .action(() => {
    try {
      const dataHelper = new DataHelper();
      const apiHelper = new ApiHelper();
      dataHelper.parseSpec();
      apiHelper.parseSpec();
      console.log(`✅ Prepare complete — apiConfig.json and dataConfig.json updated.`);
    } catch (e: any) {
      console.error(`❌ Prepare failed: ${e.message}`);
      process.exit(1);
    }
  });

// Command 3: blend-generate (add your logic here)
program.command('serve')
  .description('Generate files or configurations based on existing ones')
  .action(async () => {
    try {
      const frontEndHelper = new FrontEndHelper();
      const apiHelper = new ApiHelper();
      const dataHelper = new DataHelper();
      frontEndHelper.buildFrontEnd();
      dataHelper.parseJSONAndGenerateFiles();
      apiHelper.doFrontEndApiGenerations();
      console.log(`✅ Serve complete — frontend, data models, and Redux files generated.`);
    } catch (e: any) {
      console.error(`❌ Serve failed: ${e.message}`);
      process.exit(1);
    }
  });

program.command('chop')
  .description('Generate files or configurations based on existing ones')
  .action(() => {
    try {
      const folderPath = path.join(process.cwd());
      const folderName = path.basename(folderPath);
      const basicFilePath = path.join(folderPath, `${folderName}.rbasic`);
      const basicFileContent = FileHelper.readFile(basicFilePath);
      const basicHelper = new BasicHelper();
      basicHelper.parseSpec(basicFileContent);
      basicHelper.createRequiredFile(basicFileContent);
      console.log(`✅ Chop complete — spec files created from ${folderName}.rbasic.`);
    } catch (e: any) {
      console.error(`❌ Chop failed: ${e.message}`);
      process.exit(1);
    }
  });


program.parse(process.argv);

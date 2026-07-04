
import { FileHelper } from "./fileHelper";
import path from 'path';
import BlendBasicGrammarHelper from "./grammarHelper/BlendBasicGrammarHelper";

export default class BasicHelper {
    basicFilePath: string;
    folderName: string;
    folderPath: string;
    basicFileContent: string;
    configPath: string;
    specPath: string;
    constructor() {
        this.folderPath = path.join(process.cwd());
        this.folderName = path.basename(this.folderPath);
        this.basicFilePath = path.join(this.folderPath, `${this.folderName}.basic`);
        this.configPath = path.join(this.folderPath, '.basicConfig');
        this.specPath =  path.join(this.folderPath, 'spec');
    }

    parseSpec(spec: string) {
        const blendbasic = new BlendBasicGrammarHelper();
        const basicParsedJSON = blendbasic.parseBlendBasic(spec);
        if(basicParsedJSON.valid) {
            basicParsedJSON.basicJson.name = this.folderName;
            FileHelper.ensureDir(this.configPath);
            FileHelper.writeFile(`${this.configPath}/basicConfig.json`, JSON.stringify(basicParsedJSON.basicJson));
        } else {
            
        }
    }

    createRequiredFile(spec: string) {
        const blendbasic = new BlendBasicGrammarHelper();
        const basicParsedJSON = blendbasic.parseBlendBasic(spec);
          if(basicParsedJSON.valid) {
            basicParsedJSON.basicJson.dataModuleList.map(item => {
                FileHelper.createFile(`${this.specPath}/data/${item}.data`, `module ${item}`);
            })
            basicParsedJSON.basicJson.apiModuleList.map(item => {
                FileHelper.createFile(`${this.specPath}/api/${item}.api`, `module ${item}`);
            })
        } else {
            
        }
    }
    
    
    
}
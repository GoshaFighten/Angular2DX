import { ManualParserLoader } from "localize-router/localize-router";
import { locale } from "devextreme/localization";

export class AppManualParserLoader extends ManualParserLoader {
    translateRoutes(language: string): Promise<any> {
        locale(language);
        return super.translateRoutes(language);
    }
}
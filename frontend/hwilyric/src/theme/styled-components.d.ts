import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        bgColor: string;
        textColor: string;
        accentColor: {
            1: string;
            2: string;
            3: string;
            4: string;
        };
        logoUrl: string;
    }
}
export const dataTypes = (): void => {
    /**
     * In JS/TS There are these data types listed below
     * 
     * Common Ones
     *  number/Number
     *  boolean/Boolean
     *  string/String
     *  object
     *  Array
     *  function
     *  Date
     *  Symbol
     *  Bigint
     * 
     * Typescript Only
     *  type
     *  Record
     *  enum
     *  unknown
     */

    let stringType: string = "Biplab";
    let stringType2: string = 'B';

    let number1: number = 1.0;
    let number2: number = 1;
    let number3: number = 1.03;
    let number4: number = 111111111111111111111.878668684554
    let number5: bigint = 111111111111111111111111111111111n;

    let status: boolean = true;
    let status1: boolean = false;

    let obj1: { name: string, active: boolean } = {
        name: "N",
        active: true
    }

    let obj2: Record<string, { name: string, active: boolean }> = {
        name: {
            name: "",
            active: true,
        },
        age: {
            name: "",
            active: true,
        }
    }

    let obj3: Record<string, string> = {
        name: "",
    }

    let obj = {
    name: "B",
    age: 1,
    active: true,
}

// let obj: object = {

// }

//declare type biplab = string | number | boolean | Array<biplab>;
type elementType = string | number | boolean;
type bip1 = elementType | Array<elementType>;
type bip2 = Array<elementType>;
type bip3 = elementType | Array<string>;

type Employee = {
    name: string,
    age: number,
    activeStatus: boolean
}

type EmpObjects = Employee | string;
type Values = "1" | "2" | "3";

const num2: Values = "1";

/////////
type TLayoutConfigValues = {
    main: Array<TLayoutConfigMain>,
    side: Array<TLayoutConfigSide>
}
type TLayoutConfigMain = {
    name: string,
    active: boolean
}
type TLayoutConfigSide = TLayoutConfigMain & {
    className: string
}
type TLayoutConfigNames = "Main_1" | "Main_2" | "Main_Side" | "Main_Side_Main";
type TLayoutConfig = {
    [key in TLayoutConfigNames]: TLayoutConfigValues
}

const modifiedObj: TLayoutConfig = {
    Main_1: {
        main: [{ active: true, name: "B" }],
        side: [{ active: true, name: "B", className: "" }]
    },
    Main_2: {
        main: [{ active: true, name: "B" }],
        side: [{ active: true, name: "B", className: "" }]
    },
    Main_Side: {
        main: [{ active: true, name: "B" }],
        side: [{ active: true, name: "B", className: "" }]
    },
    Main_Side_Main: {
        main: [{ active: true, name: "B" }],
        side: [{ active: true, name: "B", className: "" }]
    }
}

}
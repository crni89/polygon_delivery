import Ajv from "ajv";
import IServiceData from "../../../common/IServiceData.interface";

const ajv = new Ajv();

export interface IAddIngredientDto {
    name: string;
}

export default interface IAddIngredient extends IServiceData {
    name: string;
    category_id: number;
}

const AddIngredientValidator = ajv.compile({
    type: "object",
    properties: {
        name: {
            type: "string",
            minLength: 4,
            maxLength: 32,
        },
    },
    required: [
        "name",
    ],
    additionalProperties: false,
});

export { AddIngredientValidator };

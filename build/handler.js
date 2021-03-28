var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { filter } from '@atlaskit/adf-utils';
export const hello = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
            input: event,
        }, null, 2),
    };
});
export const getTemplateAdf = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const fieldGroupMacro = filter({ type: 'something' }, (node) => {
        var _a, _b, _c, _d;
        return ((_a = node.attrs) === null || _a === void 0 ? void 0 : _a.extensionKey) === 'field-group' &&
            ((_d = (_c = (_b = node.attrs) === null || _b === void 0 ? void 0 : _b.parameters) === null || _c === void 0 ? void 0 : _c.macroMetadata.macroId) === null || _d === void 0 ? void 0 : _d.value) === 'someId';
    });
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
            input: event,
            fieldGroupMacro,
        }, null, 2),
    };
});
//# sourceMappingURL=handler.js.map
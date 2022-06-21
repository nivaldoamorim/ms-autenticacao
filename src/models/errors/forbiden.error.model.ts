
export default class ForbiddenErrar extends Error {

    constructor(
        public messager: string,
        public error?: any,
    ) {
        super(messager)
    }

}
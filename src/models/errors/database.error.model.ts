
class DatabaseError extends Error {

    constructor(
        public messager: string,
        public error?: any,
    ) {
        super(messager)
    }

}

export default DatabaseError;
import * as uuid from 'uuid';

export const checkSex = (sex: boolean): string => {
    return sex ? 'assets/images/man.png' : 'assets/images/girl.png'
}

export const getUUID = () => {
    return uuid.v4()
}
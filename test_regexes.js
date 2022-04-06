export const angusTake1 = (data) => {
    const regex = new RegExp(/(?:([\w+.-]+):\/\/|(?:www\.))[^\s<]+/, 'g');
    return data.match(regex).length;
}

export const angusTake2 = (data) => {
    const regex = new RegExp(/\b(?=[hw])(?:https?:\/\/|www\.)[^\s<]+/, 'g');
    return data.match(regex).length;
}


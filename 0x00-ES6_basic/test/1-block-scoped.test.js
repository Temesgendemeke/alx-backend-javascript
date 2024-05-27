import taskBlock from "../1-block-scoped";

test('check the scope', () => { 
    expect(taskBlock(true)).toStrictEqual([false, true])
})

test('check the scope with false params', () => { 
    expect(taskBlock(false)).toStrictEqual([false, true])
})
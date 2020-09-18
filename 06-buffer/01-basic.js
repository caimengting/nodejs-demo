#!/usr/bin/env node

const log = console.log;

let buf1 = Buffer.alloc(256);
buf1[0] = 0;

log('buf1 length:', buf1.length);
log('\nbuf1:', buf1);

// 通过循环，来初始化 buffer 中的每个字节
for(let i=0; i<buf1.length; i++) buf1[i] = i;
log('\nbuf1:', buf1);

// 类似数组，对 buffer 做切片操作
let buf2 = buf1.slice(250, 256);
log('\nbuf2:', buf2);

// 在 buffer 中填充数据，buffer 数据转化成 JSON 数据
buf2.fill(0);
log('\nbuf2:', buf2);
log('\nbuf2\'s JSON:', buf2.toJSON());
log('\nbuf2\'s JSON:', JSON.stringify(buf2));

// 用数组初始化 buffer
let array = ['a', 0xba, 0xdf, 0x00, 255, 10];
let buf3 = Buffer.from(array);

log('\nbuf3:', buf3.length, buf3);

// 用字符串初始化 buffer
let buf4 = Buffer.from('hello world', 'utf8');
log('\nbuf4:', buf4.length, buf4);

// buffer 数据复制
buf4.copy(buf3, 0, 0, buf3.length);
log('\nbuf3:', buf3.length, buf3);

// UTF8 编码
let str = '你好 wangding';
let buf5 = Buffer.from(str, 'utf8');
log('\nbuffer length:', buf5.length);
log('buffer content:', buf5);
log('string length:', str.length);

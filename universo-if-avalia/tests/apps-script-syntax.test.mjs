import test from 'node:test';import assert from 'node:assert/strict';import{readFileSync}from'node:fs';import vm from'node:vm';
const root=new URL('../apps-script/',import.meta.url);const read=name=>readFileSync(new URL(name,root),'utf8');
test('Apps Script backend parses as JavaScript V8',()=>assert.doesNotThrow(()=>new vm.Script(read('Code.gs'))));
test('catalogue bootstrap parses as JavaScript V8',()=>assert.doesNotThrow(()=>new vm.Script(read('CatalogData.gs'))));
test('HTML Service client script parses',()=>{const m=read('Index.html').match(/<script>([\\s\\S]*?)<\\/script>/);assert.ok(m);assert.doesNotThrow(()=>new vm.Script(m[1]))});

# fetch model
[![npm](https://img.shields.io/npm/v/@lucky-joel/vue-fetch-model.svg) ![npm](https://img.shields.io/npm/dm/@lucky-joel/fetch-model.svg)](https://www.npmjs.com/package/@lucky-joel/vue-fetch-model)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

获取详情接口的数据。

## 目录
- [安装](#安装)
- [使用](#使用)

# 安装
```
npm install --save @lucky-joel/vue-fetch-model
```

## 使用
```
<template>
  <div class="main">
    <!-- 一个model -->
    <lj-fetch-model 
      :url="$SERVER_PREFIX + '/singer/detail/1'"
    >
      <template slot-scope="scope">
        接口1数据：{{scope.data.name}}
      </template>
    </lj-fetch-model>

    <!-- 多个model -->
    <lj-fetch-model 
      :url="[
        $SERVER_PREFIX + '/singer/detail/1',
        $SERVER_PREFIX + '/song/detail/2',
      ]">
      <template slot-scope="scope">
        接口1数据：{{scope.data[0].name}} <br>
        接口2数据：{{scope.data[1].name}}
      </template>
    </lj-fetch-model>
  </div>
</template>

<script>
import Vue from 'vue'
import fetchModel from '@lucky-joel/vue-fetch-model'
Vue.use(fetchModel)

export default {
  ...
}
</script>
```

参数:  
* url: 接口地址。必填。

## 构建
```
npm run build
```

## 发布到 npm

```
npm run build
npm publish --access public
```

## License
[MIT](http://opensource.org/licenses/MIT)

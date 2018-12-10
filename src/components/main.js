import axios from 'axios'
export default {
  props: {
    url: {
      type: [String, Array],
    } 
  },
  data() {
    return {
      data: Array.isArray(this.url) ? fillEmptyObj(this.url.length) : {}
    }
  },
  mounted() {
    if(!this.validParams(true)) {
      return
    }
    var isMulti = Array.isArray(this.url)
    var url = isMulti ? this.url : [this.url]

    var len = url.length
    var loaded = 0
    var res = []

    url.forEach((item, i) => {
      axios.get(url).then(({data})=> {
        loaded++;
        res[i] = data.data
        if(loaded === len) {
          this.data = isMulti ? res : res[0]
        }
      }, (e) => {
        this.$emit('error', e)
      })
    })
    
  },
  methods: {
    validParams(isShowError) {
      var errMsg
      if(!this.url) {
        errMsg = '接口地址必传'
      }
      if(errMsg) {
        if(isShowError) {
          console.error(`vue-fetch-model: ${errMsg}`)
        }
        return false
      } else {
        return true
      }
    }
  }
}

function  fillEmptyObj(len) {
  var res = []
  for(var i = 0; i < len; i++) {
    res.push({})
  }
  return res
}
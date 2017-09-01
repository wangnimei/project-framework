/**
 * 创建proxy对象
 * @param  {Object} data    mock数据
 * @param  {Object} options proxy配置
 * @return {Object}         proxy对象
 */
exports.createProxy = function(data, options) {
  if (data && typeof data === 'object') {
    const obj = {}
    for (let pro in data) {
      obj['/' + pro] = options
    }
    return obj
  } else {
    return {}
  }
}

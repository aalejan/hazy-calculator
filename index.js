function calaculate(arr) {
  let opperand = ['*', '/', '-', '+']

  let nums = arr.filter(function (item) {
    if (Number(item) || opperand.indexOf(item) !== -1 || item === null) {
      return true
    }
  })

  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf('*') !== -1) {
      return nums[0] * nums[2]
    } else if (nums.indexOf('-') !== -1) {
      return nums[0] - nums[2]
    } else if (nums.indexOf('/') !== -1) {
      return nums[0] / nums[2]
    } else if (nums.indexOf('+') !== -1) {
      return nums[0] + nums[2]
    }
  }

  return NaN
}

module.exports = calaculate

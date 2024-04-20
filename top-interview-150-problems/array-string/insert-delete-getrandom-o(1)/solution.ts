export {}

class RandomizedSet {
  private map: Map<number, number> = new Map()
  private array: number[] = []

  constructor() {
  }

  insert(val: number): boolean {
    if (this.map.has(val)) {
      return false
    }

    this.map.set(val, this.array.length)
    this.array.push(val)

    return true
  }

  remove(val: number): boolean {
    if (this.map.has(val)) {
      if (this.array[this.array.length - 1] !== val) {
        const removedIndex = this.map.get(val)
        const movedValue = this.array[this.array.length - 1]
        this.array[removedIndex!] = movedValue
        this.map.set(movedValue, removedIndex!)
      }
      this.array.pop()
      this.map.delete(val)

      return true
    }

    return false
  }

  getRandom(): number {
    return this.array[Math.floor(Math.random() * this.array.length)]
  }
}

/**
* Your map object will be instantiated and called as such:
* var obj = new map()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/

let rMap = new RandomizedSet()
rMap.insert(0)
rMap.remove(0)
rMap.insert(-1)
rMap.remove(0)
console.log(`randomV: ${rMap.getRandom()}`)
console.log(`randomV: ${rMap.getRandom()}`)
console.log(`randomV: ${rMap.getRandom()}`)
console.log(`randomV: ${rMap.getRandom()}`)
console.log(`randomV: ${rMap.getRandom()}`)
console.log(`randomV: ${rMap.getRandom()}`)
console.log(`randomV: ${rMap.getRandom()}`)
console.log(`randomV: ${rMap.getRandom()}`)
console.log(`randomV: ${rMap.getRandom()}`)
console.log(`randomV: ${rMap.getRandom()}`)
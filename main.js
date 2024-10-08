import {SOME_LOCAL_VALUE } from "./values"

console.log(`Some environment variable ${import.meta.env.VITE_NAME_OF_DEPLOYER}`)
console.log(`Some local variable ${SOME_LOCAL_VALUE}`)

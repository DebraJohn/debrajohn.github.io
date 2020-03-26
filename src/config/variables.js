const IS_DEV = process.env.NODE_ENV !== 'production';
const HOST = IS_DEV ? `//localhost:8888` : `//49.235.94.148:8888`;

export default global.Variables = {
  IS_DEV,
  HOST
}

export function checkJwtLifeTime(lifeTime: number) {
    const curTime = Math.floor(Date.now() / 1000)
    return lifeTime > curTime
}
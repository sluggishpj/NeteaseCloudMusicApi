// 获取B站日版图片
// https://api.vc.bilibili.com/link_draw/v2/Doc/ranklist?biz=1&category=&rank_type=week&page_num=0&page_size=8
module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    csrf_token: ''
  }
  const id = req.query.id
  createWebAPIRequest(
    'music.163.com',
    `/weapi/v1/album/${id}`,
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
}

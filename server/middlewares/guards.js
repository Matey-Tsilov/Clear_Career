exports.isUser = () => (req, res, next) => {
      if (req.user) {
        next()
      }else{
        res.status(403).json({message: 'You need to log in first!' })
      }
    }

exports.isOwner = (api) => async (req, res, next) => {
    const item = await api.getById(req.params.id)
    if (req.user._id == item._ownerId) {
        next()
    }else {
        res.status(403).json({message: 'You are not the owner!'})
    }
}


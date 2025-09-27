export const publicNama = (req,res) => {
    const nama = req.params.nama
    res.render('nama', {
        nama : nama
    })
}
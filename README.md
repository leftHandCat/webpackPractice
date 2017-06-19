# webpack

##注意事项（可能出现的问题）：

 1. cnpm 安装 sass-loader 依赖包丢失，需要把其余的补上或者直接 npm
 2. html 里面读取配置的title，module 里面没有 html-loader 才可生效
 3. 打包图片和字体，file-loader 和 url-loader 是有区别的。
    file-loader： 相对于当前执行 webpack 命令的目录的相对路径
    url-loader： 当前打包地址的路径下（比较好用）

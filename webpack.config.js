const path = require("path"); //какая-то хуйня чтобы указывать динамический путь
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: "./src/modules/script.js", //входная точка - начать сборку с этого файла
	devtool: "source-map", // Это опция генерирует Source Maps
	output: {
		//т.е. куда всё это сложить
		filename: "main.js",
		path: path.resolve(__dirname, "dist"), //будем складывать результат сборки в папку dist
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "./src/index.html", //создаст новый HTML,а за основу возьмёт index.html
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
	],

	module: {
		rules: [
			{
				test: /\.s[ac]ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {},
					},
					"css-loader",
					"sass-loader",
				],
			},
		],
	},
};

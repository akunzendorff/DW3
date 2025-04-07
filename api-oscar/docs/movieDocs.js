/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: Endpoints para gerenciamento de filmes
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         title:
 *           type: string
 *           description: Título do filme
 *         description:
 *           type: string
 *           description: Descrição do filme
 *         release_date:
 *           type: string
 *           format: date
 *           description: Data de lançamento
 *         director_id:
 *           type: string
 *           description: ID do diretor do filme
 *         actors_ids:
 *           type: array
 *           items:
 *             type: string
 *             description: ID de um ator
 *         nominations:
 *           type: array
 *           items:
 *             type: string
 *             description: ID de uma indicação (award)
 *       example:
 *         title: A Origem
 *         description: Um ladrão que invade os sonhos das pessoas para roubar segredos.
 *         release_date: 2010-07-16
 *         director_id: 603d2149e3b1f72d1c8f9f10
 *         actors_ids:
 *           - 603d2149e3b1f72d1c8f9f11
 *           - 603d2149e3b1f72d1c8f9f12
 *         nominations:
 *           - 603d2149e3b1f72d1c8f9f99
 */

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Lista todos os filmes
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: Lista de filmes retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */

/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Retorna um filme pelo ID
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do filme
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Filme encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       404:
 *         description: Filme não encontrado
 */

/**
 * @swagger
 * /movies/create:
 *   post:
 *     summary: Cria um novo filme
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       201:
 *         description: Filme criado com sucesso
 *       500:
 *         description: Erro ao criar filme
 */

/**
 * @swagger
 * /movies/update/{id}:
 *   put:
 *     summary: Atualiza um filme existente
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do filme
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       200:
 *         description: Filme atualizado com sucesso
 *       500:
 *         description: Erro ao atualizar filme
 */

/**
 * @swagger
 * /movies/delete/{id}:
 *   delete:
 *     summary: Deleta um filme por ID
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do filme
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Filme deletado com sucesso
 *       500:
 *         description: Erro ao deletar filme
 */

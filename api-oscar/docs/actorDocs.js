/**
 * @swagger
 * tags:
 *   name: Actors
 *   description: Endpoints para gerenciamento de atores
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Actor:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: Nome do ator
 *         birthdate:
 *           type: string
 *           format: date
 *           description: Data de nascimento
 *         movies_ids:
 *           type: array
 *           items:
 *             type: string
 *             description: ID de um filme
 *         nominations:
 *           type: array
 *           items:
 *             type: string
 *             description: ID de uma indicação (award)
 *       example:
 *         name: Leonardo DiCaprio
 *         birthdate: 1974-11-11
 *         movies_ids:
 *           - 603d2149e3b1f72d1c8f9f01
 *           - 603d2149e3b1f72d1c8f9f02
 *         nominations:
 *           - 603d2149e3b1f72d1c8f9f99
 */

/**
 * @swagger
 * /actors:
 *   get:
 *     summary: Lista todos os atores
 *     tags: [Actors]
 *     responses:
 *       200:
 *         description: Lista de atores retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 actors:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Actor'
 */

/**
 * @swagger
 * /actors/create:
 *   post:
 *     summary: Cria um novo ator
 *     tags: [Actors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name]
 *             properties:
 *               name:
 *                 type: string
 *               birthdate:
 *                 type: string
 *                 format: date
 *               movies_ids:
 *                 type: array
 *                 items:
 *                   type: string
 *             example:
 *               name: Meryl Streep
 *               birthdate: 1949-06-22
 *               movies_ids:
 *                 - 603d2149e3b1f72d1c8f9f03
 *     responses:
 *       201:
 *         description: Ator criado com sucesso
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /actors/update/{id}:
 *   put:
 *     summary: Atualiza um ator existente
 *     tags: [Actors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do ator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Actor'
 *     responses:
 *       200:
 *         description: Ator atualizado com sucesso
 *       400:
 *         description: ID inválido
 *       500:
 *         description: Erro ao atualizar ator
 */

/**
 * @swagger
 * /actors/delete/{id}:
 *   delete:
 *     summary: Deleta um ator por ID
 *     tags: [Actors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do ator
 *     responses:
 *       204:
 *         description: Ator deletado com sucesso
 *       400:
 *         description: ID inválido
 *       500:
 *         description: Erro interno do servidor
 */

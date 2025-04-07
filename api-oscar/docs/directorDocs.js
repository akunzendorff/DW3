/**
 * @swagger
 * tags:
 *   name: Directors
 *   description: Endpoints para gerenciamento de diretores
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Director:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: Nome do diretor
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
 *         name: Christopher Nolan
 *         birthdate: 1970-07-30
 *         movies_ids:
 *           - 603d2149e3b1f72d1c8f9f04
 *           - 603d2149e3b1f72d1c8f9f05
 *         nominations:
 *           - 603d2149e3b1f72d1c8f9f90
 */

/**
 * @swagger
 * /directors:
 *   get:
 *     summary: Lista todos os diretores
 *     tags: [Directors]
 *     responses:
 *       200:
 *         description: Lista de diretores retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 directors:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Director'
 */

/**
 * @swagger
 * /directors/create:
 *   post:
 *     summary: Cria um novo diretor
 *     tags: [Directors]
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
 *               name: Steven Spielberg
 *               birthdate: 1946-12-18
 *               movies_ids:
 *                 - 603d2149e3b1f72d1c8f9f06
 *     responses:
 *       201:
 *         description: Diretor criado com sucesso
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /directors/update/{id}:
 *   put:
 *     summary: Atualiza um diretor existente
 *     tags: [Directors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do diretor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Director'
 *     responses:
 *       200:
 *         description: Diretor atualizado com sucesso
 *       400:
 *         description: ID inválido
 *       500:
 *         description: Erro ao atualizar diretor
 */

/**
 * @swagger
 * /directors/delete/{id}:
 *   delete:
 *     summary: Deleta um diretor por ID
 *     tags: [Directors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do diretor
 *     responses:
 *       204:
 *         description: Diretor deletado com sucesso
 *       400:
 *         description: ID inválido
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * tags:
 *   name: Awards
 *   description: Endpoints para gerenciamento de prêmios do Oscar
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Nominee:
 *       type: object
 *       required:
 *         - type
 *         - entity_id
 *       properties:
 *         type:
 *           type: string
 *           enum: [movie, actor, director]
 *           description: Tipo do indicado
 *         entity_id:
 *           type: string
 *           description: ID do indicado (ObjectId)
 *       example:
 *         type: actor
 *         entity_id: 603d2149e3b1f72d1c8f9f01
 *
 *     Award:
 *       type: object
 *       required:
 *         - category
 *         - year
 *         - nominees
 *         - winner
 *       properties:
 *         category:
 *           type: string
 *         year:
 *           type: integer
 *         nominees:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Nominee'
 *         winner:
 *           $ref: '#/components/schemas/Nominee'
 *       example:
 *         category: Melhor Diretor
 *         year: 2025
 *         nominees:
 *           - type: director
 *             entity_id: 603d2149e3b1f72d1c8f9f11
 *           - type: director
 *             entity_id: 603d2149e3b1f72d1c8f9f12
 *         winner:
 *           type: director
 *           entity_id: 603d2149e3b1f72d1c8f9f11
 */

/**
 * @swagger
 * /awards:
 *   get:
 *     summary: Lista todos os prêmios
 *     tags: [Awards]
 *     responses:
 *       200:
 *         description: Lista de prêmios retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 awards:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Award'
 */

/**
 * @swagger
 * /awards/create:
 *   post:
 *     summary: Cria um novo prêmio
 *     tags: [Awards]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Award'
 *     responses:
 *       201:
 *         description: Prêmio criado com sucesso
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /awards/update/{id}:
 *   put:
 *     summary: Atualiza um prêmio por ID
 *     tags: [Awards]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do prêmio a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Award'
 *     responses:
 *       200:
 *         description: Prêmio atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Award'
 *       400:
 *         description: ID inválido ou dados mal formatados
 *       404:
 *         description: Prêmio não encontrado
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /awards/delete/{id}:
 *   delete:
 *     summary: Deleta um prêmio por ID
 *     tags: [Awards]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do prêmio
 *     responses:
 *       204:
 *         description: Prêmio deletado com sucesso (sem conteúdo)
 *       400:
 *         description: ID inválido
 *       500:
 *         description: Erro interno do servidor
 */

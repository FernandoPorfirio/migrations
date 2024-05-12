exports.seed = async function(knex) {
//   await knex('exaple').del()
    await knex('exaple').insert([
        {id:1, name: "teste1", description: "desc1" },
        {id:2, name: "teste2", description: "" },
        {id:3, name: "teste3", description: "desc2" }
    ]).onConflict('id').merge();
};

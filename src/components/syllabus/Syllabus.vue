<template>
    <div>
        <h1>{{ syllabus["subject_name"] }} Syllabus</h1>

        <a-collapse>
            <a-collapse-panel v-for="chapter in syllabus['chapters']" :key="chapter['chapter_id']" :header="chapter['chapter_name']">
                <a-list item-layout="horizontal" :data-source="chapter['subheads']">
                    <a-list-item slot="renderItem" slot-scope="subhead">
                        <a-list-item-meta @click="toViewMaterial(chapter)">
                            <span slot="title">{{ subhead['subhead_name'] }}</span>
                        </a-list-item-meta>
                    </a-list-item>
                </a-list>
            </a-collapse-panel>
        </a-collapse>
    </div>
</template>

<script>
    let syllabus = {
        subject_name: "Mathematics",
        chapters: [
            {
                chapter_id: 0,

                chapter_name: "Sets 1",
                
                objectives: [
                    "Understand venn diagrams, intersections and unions",
                    "Recall how to draw a venn diagram with intersections and unions",
                    "Calculate complex math using sets"
                ],

                subheads: [
                    {
                        subhead_id: 0,
                        subhead_name: "Venn Diagram",
                    },

                    {
                        subhead_id: 1,
                        subhead_name: "Intersection",
                    },

                    {
                        subhead_id: 2,
                        subhead_name: "Union",
                    },
                ]
            },

            {
                chapter_id: 1,

                chapter_name: "Factorization 1",

                objectives: [
                    "Understand common factors",
                    "Recall how to factorize",
                    "Calculate complex math using factorize"
                ],

                subheads: [
                    {
                        subhead_name: "Common Factors",
                    },
                ]
            },
        ]
    }

    export default{
        name: "Syllabus",

        components: {},

        data(){
            return{
                syllabus,
            }
        },

        methods: {
            toViewMaterial(){
                this.$router.push({ name: "View Material" })
            }
        },

        async created(){},

        mounted(){},

        // computed: mapGetters([]),
    }
</script>
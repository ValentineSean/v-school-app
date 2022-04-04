<template>
    <div>
        <h1>{{ syllabus["subject_name"] }}</h1>
        <a-list item-layout="horizontal" :data-source="syllabus['chapters']">
            <a-list-item slot="renderItem" slot-scope="chapter">
            <a-list-item-meta
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            >
                <span slot="title">{{ chapter['chapter_name'] }}</span>
            </a-list-item-meta>
            </a-list-item>
        </a-list>
    </div>
</template>

<script>
    let syllabus = {
        subject_name: "Mathematics",
        chapters: [
            {
                chapter_name: "Sets 1",
                
                objectives: [
                    "Understand venn diagrams, intersections and unions",
                    "Recall how to draw a venn diagram with intersections and unions",
                    "Calculate complex math using sets"
                ],

                subheads: [
                    {
                        subhead_name: "Venn Diagram",
                    },

                    {
                        subhead_name: "Intersection",
                    },

                    {
                        subhead_name: "Union",
                    },
                ]
            },

            {
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

        methods: {},

        async created(){},

        mounted(){},

        // computed: mapGetters([]),
    }
</script>
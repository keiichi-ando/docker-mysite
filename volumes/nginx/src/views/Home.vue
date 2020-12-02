<template>
    <section>
        <b-tabs type="is-boxed">
            <!-- Server -->
            <b-tab-item label="Server" icon="server-network">
                <div class="subtitle">
                    <b-icon icon="docker"></b-icon>
                    Docker / Portainer
                </div>
                <ul>
                    <li><a href="/portainer">Docker status (Portainer)</a></li>
                    <li><a href="https://documentation.portainer.io/">Portainer documents</a></li>
                </ul>
            </b-tab-item>
            <!-- Git -->
            <b-tab-item label="Git" icon="git">
                <div v-html="md['git']"></div>
            </b-tab-item>
            <!-- develop -->
            <b-tab-item label="develop" icon="file-code-outline">
                <div v-html="md['develop']"></div>
            </b-tab-item>
        </b-tabs>
    </section>
</template>
<script>
// import 'vue-material-design-icons/styles.css';
import marked from "marked";

export default {
    created() {
        this.getDoc("git");
        this.getDoc("develop");
    },
    data() {
        return {
            activeTab: 0,
            showBooks: false,
            md: [],
        };
    },
    methods: {
        getDoc(name) {
            var self = this;
            window.axios
                .get("/documents/" + name + ".md")
                .then((response) => {
                    self.$set(self.md, name, marked(response.data));
                })
                .catch((error) => {
                    console.log(error);
                    self.$set(self.md, name, "load md file fail!");
                });
        },
    },
};
</script>
<style scoped lang="scss">
.title,
.subtitle {
    color: #00ac73;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
}
/deep/ h1,
/deep/ h2 {
    @extend .title;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.25;
}
.icon {
    color: #4a4a4a;
    font-family: "Material Design Icons";
    font-size: 1.7rem;
}
/deep/ #github:before {
    @extend .icon;
    content: "\F02A4";
}
/deep/ #gitea---local:before {
    @extend .icon;
    content: "\F02A2";
}
/deep/ #colors:before {
    @extend .icon;
    content: "\F0301";
}
/deep/ #css:before {
    @extend .icon;
    content: "\F031C ";
}
/deep/ #icon:before {
    @extend .icon;
    content: "\F0C05";
}
</style>
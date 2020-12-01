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
                <div class="subtitle">
                    <b-icon icon="git"></b-icon>
                    GitHub
                </div>
                <ul>
                    <li><a href="https://github.com/keiichi-ando">GitHub (Keiichi-ando)</a></li>
                    <li><a href="https://localhost:3000">Gitea (local)</a></li>
                </ul>
            </b-tab-item>
            <!-- develop -->
            <b-tab-item label="develop" icon="file-code-outline">
                <div class="subtitle"><b-icon icon="language-css3"></b-icon>css</div>
                <ul>
                    <li><a href="https://buefy.org/documentation">buefy css</a></li>
                    <li><a href="https://materialdesignicons.com/">Material Design Icons</a></li>
                    <li><a href="https://www.pinterest.jp/pin/47991552267842993/">example tab 1</a></li>
                    <li><a href="https://www.pinterest.jp/pin/755197431248904771/">example tab 2</a></li>
                    <li><a href="https://www.pinterest.jp/pin/353391902007561691/">example 3</a></li>
                </ul>
            </b-tab-item>
        </b-tabs>
    </section>
</template>
<script>
export default {
    data() {
        return {
            activeTab: 0,
            showBooks: false,
        };
    },
};
</script>

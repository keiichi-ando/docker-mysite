<template>
  <section>
    <b-tabs type="is-boxed">
      <b-tab-item label="Docker" icon="docker">
        <div class="subtitle">
          <b-icon icon="docker" size="is-large"></b-icon>
          <b-icon icon="docker" size="is-medium"></b-icon>
          <b-icon icon="docker" size="is-small"></b-icon>
          Docker / Portainer
        </div>
        <ul>
          <li><a href="/portainer">Docker status (Portainer)</a></li>
          <li>
            <a href="https://documentation.portainer.io/"
              >Portainer documents</a
            >
          </li>
        </ul>
      </b-tab-item>
      <!-- <b-tab-item label="Git" icon-pack="fas" icon="code-branch"> -->
      <b-tab-item label="Git" icon="git">
        <div class="subtitle">GitHub</div>
        <ul>
          <li>
            <a href="https://github.com/keiichi-ando">GitHub (Keiichi-ando)</a>
          </li>
          <li><a href="https://localhost:3000">Gitea (local)</a></li>
        </ul>
      </b-tab-item>
      <b-tab-item label="css" icon="file-code-outline">
        <div class="subtitle">css</div>
        <ul>
          <li><a href="https://buefy.org/documentation">buefy css</a></li>
          <li>
            <a href="https://materialdesignicons.com/">Material Design Icons</a>
          </li>
          <li>
            <a href="https://www.pinterest.jp/pin/47991552267842993/"
              >example tab 1</a
            >
          </li>
          <li>
            <a href="https://www.pinterest.jp/pin/755197431248904771/"
              >example tab 2</a
            >
          </li>
          <li>
            <a href="https://www.pinterest.jp/pin/353391902007561691/"
              >example 3</a
            >
          </li>
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

<template>
  <BoxContent :title="$t('views.engSystems.storage')" border :mbottom="false">
    <GhostLoading :isLoading="loadingTableStatus" setHeight="18">
      <p class="is-size-7">
        {{ engineeredSystems.storage | formatNumber('0.00', '%') }}
      </p>
    </GhostLoading>
  </BoxContent>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import BoxContent from '@/components/common/BoxContent.vue'
import GhostLoading from '@/components/common/GhostLoading.vue'

export default {
  name: 'engineered-storage-component',
  components: {
    BoxContent,
    GhostLoading,
  },
  computed: {
    ...mapState(['engineeredSystems']),
    ...mapGetters(['loadingTableStatus']),
  },
}
</script>

<style lang="scss" scoped></style>

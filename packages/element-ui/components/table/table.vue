  <script>
import { Table as ElTable } from 'element-ui';

export default {
  name: 'CyTable',
  components: { ElTable },
  data() {
    return {};
  },
  props: {
    data: {},
    columns: {},
    pageNum: {},
    pageSize: {},
    pageSizes: {},
    layout: {},
    isPagination: {},
  },
  methods: {},
  render: (h) => {
    return h(ElTable);
  },
};
</script>
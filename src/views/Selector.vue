     <template>
    <ul>
        <li @click="selectItem('BTC')" :className="current == 'BTC' ? 'active' : '' "> Bitcoin</li>
        <li @click="selectItem('ETH')" :className="current == 'ETH' ? 'active' : '' "> ETH</li>
        <li @click="selectItem('USDT')" :className="current == 'USDT' ? 'active' : '' ">USDT</li>
    </ul>
     
     
     </template>
     
     
     
     
     <script>
    export default {
        props: {
         setCrypto: {
            type: Function,
            required: true
         }
        },
        data(){
         return {
            current: " ",
         }
        },
        methods: {
         selectItem(){
            this.setCrypto(val);
            this.current=(val);
         }
        }
    }
     </script>
     
     
     
     <style scoped>
     li {
        display: block;
        background-color: #050602;
        color: #fff;
        padding: 10px;
     }
     li:hover, li.active {
        background-color: #24043e;
        cursor: pointer;
     }
     </style>
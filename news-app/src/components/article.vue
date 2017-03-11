
<template>
   <div>
        <ul>
          <li class="l-btn" onclick="window.history.go(-1)">返回</li>
        </ul>
         <p>{{ $route.params.id }}</p>
   </div>

</template>

<script>
export default {

}
</script>

<style>


</style>


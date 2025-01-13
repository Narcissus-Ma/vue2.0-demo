<template>
  <div class="card-scene">
    <Container
      orientation="horizontal"
      @drop="onColumnDrop($event)"
      drag-handle-selector=".column-drag-handle"
    >
      <Draggable v-for="column in taskColumnList" :key="column.name">
        <div class="card-container">
          <div class="card-column-header">
            <span class="column-drag-handle">&#x2630;</span>
            {{ column.name }}
          </div>
          <Container
            group-name="col"
            @drop="(e) => onCardDrop(column.id, e)"
            :get-child-payload="getCardPayload(column.id)"
            drag-class="card-ghost"
            drop-class="card-ghost-drop"
            :drop-placeholder="dropPlaceholderOptions"
            class="draggable-container"
          >
            <Draggable v-for="task in column.list" :key="task.id">
              <div class="task-card">
                <div class="task-title">{{ task.name }}</div>
                <div
                  class="task-priority"
                  :style="{ background: priorityMap[task.priority].color }"
                >
                  {{ priorityMap[task.priority].label }}
                </div>
              </div>
            </Draggable>
          </Container>
        </div>
      </Draggable>
    </Container>
  </div>
</template>

<script>
import { Container, Draggable } from "vue-smooth-dnd";

const applyDrag = (arr, dragResult) => {
  const { removedIndex, addedIndex, payload } = dragResult;
  console.log(removedIndex, addedIndex, payload);
  if (removedIndex === null && addedIndex === null) return arr;

  const result = [...arr];
  let itemToAdd = payload;

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0];
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd);
  }

  return result;
};

const taskList = [
  {
    name: "首页",
    priority: "P1",
    status: "待开发",
    id: 1,
  },
  {
    name: "流程图开发",
    priority: "P3",
    status: "待评审",
    id: 2,
  },
  {
    name: "统计图展示",
    priority: "P0",
    status: "开发中",
    id: 3,
  },
  {
    name: "文件管理",
    priority: "P1",
    status: "开发中",
    id: 4,
  },
];

const statusList = ["待评审", "待开发", "开发中", "已完成"];

const taskColumnList = statusList.map((status, index) => {
  return {
    name: status,
    list: taskList.filter((item) => item.status === status),
    id: index,
  };
});

const priorityMap = {
  P0: {
    label: "最高优",
    color: "#ff5454",
  },
  P1: {
    label: "高优",
    color: "#ff9a00",
  },
  P2: {
    label: "中等",
    color: "#ffd139",
  },
  P3: {
    label: "较低",
    color: "#1ac7b5",
  },
};

export default {
  name: "Cards",
  components: { Container, Draggable },
  data() {
    return {
      taskColumnList,
      priorityMap,
      dropPlaceholderOptions: {
        className: "drop-preview",
        animationDuration: "150",
        showOnTop: true,
      },
    };
  },
  methods: {
    onColumnDrop(dropResult) {
      this.taskColumnList = applyDrag(this.taskColumnList, dropResult);
    },
    onCardDrop(columnId, dropResult) {
      let { removedIndex, addedIndex, payload } = dropResult;
      if (removedIndex !== null || addedIndex !== null) {
        const column = taskColumnList.find((p) => p.id === columnId);
        if (addedIndex !== null && payload) {
          // 更新任务状态
          dropResult.payload = {
            ...payload,
            status: column.name,
          };
        }
        column.list = applyDrag(column.list, dropResult);
      }
    },
    getCardPayload(columnId) {
      return (index) =>
        this.taskColumnList.find((p) => p.id === columnId).list[index];
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Microsoft YaHei", "PingFang SC", "Helvetica Neue", Helvetica,
    sans-serif;
  line-height: 1.45;
  color: rgba(0, 0, 0, 0.65);
}
.card-scene {
  user-select: none;
  display: flex;
  height: 100%;
  margin: 20px;
}
.card-container {
  display: flex;
  flex-direction: column;
  width: 260px;
  min-width: 260px;
  border-radius: 12px;
  background-color: #edeff2;
  margin-right: 16px;
  height: calc(100vh - 40px);
}
.card-column-header {
  display: flex;
  height: 50px;
  margin: 0 16px;
  align-items: center;
  flex-shrink: 0;
  font-weight: 500;
  font-size: 16px;
}
.draggable-container {
  flex-grow: 1;
  overflow: auto;
}
.column-drag-handle {
  cursor: move;
  padding: 5px;
}
.task-card {
  margin: 10px;
  background-color: white;
  padding: 15px 10px;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.12);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}
.task-title {
  color: #333333;
  font-size: 14px;
}
.task-priority {
  width: 60px;
  line-height: 20px;
  border-radius: 12px;
  text-align: center;
  color: #fff;
  font-size: 12px;
}
.card-ghost {
  transition: transform 0.18s ease;
  transform: rotateZ(5deg);
}

.card-ghost-drop {
  transition: transform 0.18s ease-in-out;
  transform: rotateZ(0deg);
}

.drop-preview {
  background-color: rgba(150, 150, 200, 0.1);
  border: 1px dashed #abc;
  margin: 5px;
}
</style>

// import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
// import { ResourceService } from './resourcesTools.service';
// import { ResourcesTools } from './resourcesTools.entity';

// @Controller('resources')
// export class ResourceController {
//   constructor(private readonly resourceService: ResourceService) {}

//   @Get()
//   getAllResources(): Promise<ResourcesTools[]> {
//     return this.resourceService.getAllResources();
//   }

//   @Post()
//   createResource(@Body() resourceData: ResourcesTools): Promise<ResourcesTools> {
//     return this.resourceService.createResource(resourceData);
//   }
//   @Delete(':id')
//   deleteResource(@Param('id') resourceId: number): Promise<void> {
//     return this.resourceService.deleteResource(resourceId);
//   }

//   @Post(':id/archive')
//   archiveResource(@Param('id') resourceId: number): Promise<void> {
//     return this.resourceService.archiveResource(resourceId);
// }
// }
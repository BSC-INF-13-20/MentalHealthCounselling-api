// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { ResourceEntity } from './resourcesTools.entity';
// // import { ResourcesToolsService } from './resourcesTools.service'

// @Injectable()
// export class ResourceService {
//   constructor(
//     @InjectRepository(ResourceEntity)
//     private readonly resourceRepository: Repository<ResourceEntity>,
//   ) {}

//   async getAllResources(): Promise<ResourcesTools[]> {
//     const resources = await this.resourceRepository.find();
//     return resources.map(this.mapEntityToModel);
//   }

//   async createResource(resourceData: ResourcesTools): Promise<ResourcesTools> {
//     const resourceEntity = this.resourceRepository.create(resourceData);
//     const createdResource = await this.resourceRepository.save(resourceEntity);
//     return this.mapEntityToModel(createdResourcesTools);
//   }
//   async deleteResource(resourceId: number): Promise<void> {
//     await this.resourceRepository.delete(resourceId);
//   }

//   async archiveResource(resourceId: number): Promise<void> {
//     await this.resourceRepository.update(resourceId, { archived: true });
//   }


//   private mapEntityToModel(entity: ResourceEntity): ResourcesTools {
//     return {
//       id: entity.id,
//       name: entity.name,
//       url: entity.url,
//       description: entity.description,
//       // Map other properties as needed
//     };
//   }
// }
